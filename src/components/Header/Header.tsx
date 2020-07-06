import * as React from 'react';

const Header = () => {
  const profileImage = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1547415487i/92122571._UX60_CR0,10,60,60_.jpg';

  return (
    <div className="w-full flex justify-between items-center bg-orange-300 py-3">
      <div className="ml-12 font-bold text-orange-900 text-3xl">Shopping</div>
      <div className="mr-12 flex items-center">
        <div
          className="w-10 h-10 rounded-full bg-contain"
          style={{
            backgroundImage: `url(${profileImage})`
          }}
        />
        <div className="ml-3 font-bold text-orange-900 text-lg">Matheus Santinello</div>
      </div>
    </div>
  );
};

export default Header;
