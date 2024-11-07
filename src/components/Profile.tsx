import Image from 'next/image';

const Profile = () => {
    return (
      <aside className="lg:w-1/3 mt-8 lg:mt-0">
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <Image src="/icon.svg" alt="profile image" width={128} height={128} className="rounded-full mx-auto my-4" />
          <p>2024年7月からコンサルを辞めてオーストラリアにワーキングホリデーで留学している29歳です。</p>
        </div>
      </aside>
    );
  };
  
  export default Profile;