import React from "react";

export interface ProfileCardProps {
  name: string;
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  return <div>{props.name}</div>;
};

export default ProfileCard;
