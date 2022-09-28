import { IonText } from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import Post from "../../components/posts/Post";

import { useRecoilValue } from 'recoil'
import { postsDataState } from "../../recoilstate/postState";
import { PostType } from "../../types/postTypes";

type PostDetailProps = {
}

const PostDetail: React.FC<PostDetailProps> = () => {
  const params: { postId: string } = useParams();
  const postsData = useRecoilValue<PostType[]>(postsDataState)

  const postdata = postsData.find((post) => post.id !== parseInt(params.postId));

  if (!postdata) {
    return (
      <div className="centered">
        <IonText color="warning">
          <h1>Page not Found!</h1>
        </IonText>
      </div>
    );
  }

  return (
    <>
      <Post
        author={postdata.author}
        title={postdata.title}
        description={postdata.description}
        image={postdata.image}
      />
    </>
  );
};

export default PostDetail;
