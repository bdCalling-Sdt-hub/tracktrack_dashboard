import { imageUrl } from "../../Utils/server";

const ProfileImageInfo = ({
  name,
  email,
  image,
}: {
  name?: string;
  email?: string;
  image?: string;
}) => {
  return (
    <div className="start-center">
      {image && (
        <img
          src={imageUrl(image)}
          className="w-10 h-10  object-cover rounded-full"
          alt={name}
        />
      )}
      <div>
        {name && <p className="text-base">{name}</p>}
        {email && <p className="text-xs">{email}</p>}
      </div>
    </div>
  );
};

export default ProfileImageInfo;
