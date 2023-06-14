interface AddPost {
  content: string;
  image?: string;
  isPublic: boolean;
  cohortId?: number
}

export default AddPost;
