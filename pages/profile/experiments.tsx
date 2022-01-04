import * as React from 'react';
import Layout from '../../components/layouts/profile';
import ProfileHeader from '../../components/ProfileHeader';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <ProfileHeader />
      <div className="ss">ssssss</div>;
    </div>
  );
};

export default App;
