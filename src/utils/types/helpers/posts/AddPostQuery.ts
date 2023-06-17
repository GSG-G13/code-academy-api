interface AddPostQuery {
  userId: number;
  content: string;
  image?: string;
  isPublic: boolean;
  cohortId?: number | null;
}

export default AddPostQuery;
