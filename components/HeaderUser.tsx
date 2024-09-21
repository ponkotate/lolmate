const auth = true

const HeaderUser = () => {
  return (
    <div className="relative">
        <span className="block font-medium text-black">
          SN:test#jp1
        </span>
        {auth ? (
          <span className="block text-xs">ID:lolmateUserID</span>
        ) : (
          <span className="block text-center text-xs">登録</span>
        )}
    </div>
  );
};

export default HeaderUser;
