import { S3Event } from "aws-lambda"
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3"
import { Readable } from "stream"
import { streamToBuffer } from "@jorgeferrero/stream-to-buffer"
import { StatusCodes } from "http-status-codes"
import { ThumbnailLambdaEnvs } from "../lib/construct"
import thumbnail from "./thumbnail"

/**
 * Lambda function
 *
 * @param event s3 event
 * @throws {Error} Destination bucket unset
 * @throws {Error} Illegal record size, s3 event records = 0 or records > 1
 * @throws {Error} Not supported image type
 * @throws {Error} S3 get object failed
 * @throws {Error} S3 put object failed
 */
export async function handler(event: S3Event) {
  const envs = process.env as ThumbnailLambdaEnvs

  if (envs.DEST_BUCKET == "") {
    throw new Error("Destination bucket unset")
  }

  if (event.Records.length == 0 || event.Records.length > 1) {
    throw new Error("Illegal record size, s3 event records = 0 or records > 1")
  }

  const record = event.Records[0]
  const key = record.s3.object.key

  if (!typeMatch(envs.SUPPORT_IMAGE_TYPES.split(","), key)) {
    throw new Error("Not supported image type")
  }

  const s3 = new S3Client({})

  const image = await s3.send(
    new GetObjectCommand({
      Bucket: record.s3.bucket.name,
      Key: record.s3.object.key,
    }),
  )

  if (image.$metadata.httpStatusCode != StatusCodes.OK) {
    throw new Error("S3 get object failed")
  }

  const buffer = await streamToBuffer(image.Body as Readable)
  const resizedBuffer = await thumbnail(buffer, parseInt(envs.RESIZE_WIDTH))

  const result = await s3.send(
    new PutObjectCommand({
      Bucket: envs.DEST_BUCKET,
      Key: record.s3.object.key,
      Body: resizedBuffer,
      ContentType: image.ContentType,
    }),
  )

  if (
    result.$metadata.httpStatusCode != StatusCodes.OK &&
    result.$metadata.httpStatusCode != StatusCodes.CREATED
  ) {
    throw new Error("S3 put object failed")
  }
}

export function typeMatch(supportImageTypes: string[], key: string) {
  key = decodeURIComponent(key.replace(/\+/g, " "))
  const typeMatch = key.match(/\.([^.]*)$/)
  if (!typeMatch) {
    return false
  }
  const imageType = typeMatch[1].toLowerCase()
  return supportImageTypes.includes(imageType)
}
