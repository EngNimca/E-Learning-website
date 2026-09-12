function FloatingAvatars({ avatars }) {
  return (
    <div className="absolute inset-0 hidden md:block">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar.image}
          alt=""
          className={`absolute h-10 w-10 rounded-lg object-cover shadow-sm ${avatar.position}`}
        />
      ))}
    </div>
  );
}

export default FloatingAvatars;