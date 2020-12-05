

export interface CommentProps{
    support_nickname:string,
    support_amount:string,
    support_comment:string
  }
  
  export interface CommentListProps{
    comments:CommentProps[],
    lenOfComments:number,
    onToggleComments:()=>void,
    seeAllComments:boolean,
    added:boolean,
    onToggleAdded:()=>void
  }