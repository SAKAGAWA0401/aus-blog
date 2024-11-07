import Image from 'next/image';

const Profile = () => {
    return (
      <aside className="lg:w-1/3 mt-8 lg:mt-0">
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <Image src="/icon.svg" alt="profile image" width={96} height={96} className="rounded-full mx-auto my-4 max-w-[64px] max-h-[64px]" />
          <p>2024年7月からコンサルを辞めてオーストラリアにワーキングホリデーで留学している29歳です。</p>
        </div>
      </aside>
    );
  };
  
  export default Profile;