import React from "react";

const ApprovalCard = (props) => {
  return (
    <form className="ui centered card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Save</div>
          <div className="ui basic red button">Cancel</div>
        </div>
      </div>
    </form>
  );
};

export default ApprovalCard;
