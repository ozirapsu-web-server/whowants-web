import React from 'react'
import Comment from "components/Comment";
import styled from "styled-components";
import {CommentWrapper,Notice,NumberOfSupporter} from 'components/sharedComponents';

const Wrapper=styled(CommentWrapper)`
    padding:10px 0;
`;


const Supporter = ({comments,lenOfComments}) => {
    return (
        <CommentWrapper>
        <Notice>
          <NumberOfSupporter>
            {lenOfComments}
            명의 서포터
          </NumberOfSupporter>
          <div>가 이 사연을 응원합니다.</div>
        </Notice>

        {comments &&
          comments.map((comment, idx) => {
            return (
              <Comment
                key={`supporters-${idx}`}
                support_nickname={comment.support_nickname}
                support_amount={comment.support_amount}
                support_comment={comment.support_comment}
              />
            );
          })}

      </CommentWrapper>
    );
    
}

export default Supporter
