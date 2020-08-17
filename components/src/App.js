import React from 'react';
// import logo from './logo.svg';
import './App.css';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'


function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
          </div></ApprovalCard>
 
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45PM" 
          content="Nice blog post"
          avatar={faker.image.avatar()}
      />
         </ApprovalCard>

     <ApprovalCard>
      <CommentDetail
      author="Alex" 
      timeAgo="Today at 2:00AM" 
      content="i like it"  
      avatar={faker.image.avatar()}
      />
      </ApprovalCard>

    <ApprovalCard>
      <CommentDetail author="Jane" 
      timeAgo="Yesterday at 5:00PM"  
      content="Boring" 
      avatar={faker.image.avatar()}
      />
      </ApprovalCard>


    </div>
  );
}

export default App;
