import * as React from 'react';

const Header = () => {
  const profileImage =
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1547415487i/92122571._UX60_CR0,10,60,60_.jpg';

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="w-full flex justify-between items-center bg-orange-300 py-2 lg:py-3">
      <button
        className="ml-4 md:ml-8 lg:ml-12 font-bold text-orange-900 text-2xl lg:text-3xl focus:outline-none"
        onClick={() => refreshPage()}
      >
        Shopping
      </button>
      <div className="mr-4 md:mr-8 lg:mr-12 flex items-center">
        <div
          className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-contain"
          style={{
            backgroundImage: `url(${profileImage})`
          }}
        />
        <div className="ml-2 md:ml-3 font-bold text-orange-900 text-base lg:text-lg">Matheus Santinello</div>
      </div>
    </div>
  );
};

export default Header;
