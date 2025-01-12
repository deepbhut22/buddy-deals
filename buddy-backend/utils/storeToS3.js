import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../config/AWSconfig.js";
import { errorHandler } from "./error.js";

// utility to store the file in S3 and get corresponding url to that file
async function storeAssignmentToS3(file, submissionData) {
  const bucketName = 'first-bucket-deep';
  const prefix = `https://${bucketName}.s3.${process.env.REGION_AWS}.amazonaws.com`;
  const key = `${submissionData.assignmentId}/${submissionData.studentId}/${file.originalname}`;

  const params = {
    Bucket: bucketName,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const command = new PutObjectCommand(params);
    await s3.send(command);

    const fileURL = `${prefix}/${key}`;

    return fileURL;

  } catch (error) {
    console.error(error);
    throw errorHandler('Failed to upload file and store assignment');
  }
}

export default storeAssignmentToS3;