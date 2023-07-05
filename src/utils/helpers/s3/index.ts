import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';
import { promisify } from 'util';
import {
  BUCKET_NAME,
  BUCKET_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
} from '../../../config';

const randomBytes = promisify(crypto.randomBytes);
const createS3Client = async () => {
  const random = (await randomBytes(16)).toString('hex');
  const client = new S3Client({
    region: BUCKET_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID as string,
      secretAccessKey: AWS_SECRET_ACCESS_KEY as string,
    },
  });
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: random,
  });
  return getSignedUrl(client, command, { expiresIn: 60 });
};

export default createS3Client;
