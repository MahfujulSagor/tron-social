import prisma from "@/lib/client";
import CommentList from "./CommentList";

const Comments = async ({postId}) => {

  const comments = await prisma.comment.findMany({
    where:{
      postId,
    },
    include:{
      user:true
    }
  })
  return (
    <div className="">
      {/* WRITE */}
      <CommentList comments={comments} postId={postId}/>
    </div>
  );
};

export default Comments;