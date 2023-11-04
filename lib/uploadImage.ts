import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  // the first argument is unique bucket id
  const fileUploaded = await storage.createFile(
    process.env.NEXT_PUBLIC_BUCKET_ID!,
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
