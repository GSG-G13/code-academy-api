interface AddPostQuery {
  userId: number;
  content: string;
  image?: string;
  isPublic: boolean;
  cohortId?: string;
}

export default AddPostQuery;
