import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friend/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import data from '../../path/data.json';
import user from '../../path/user.json';
import friends from '../../path/friends.json';
import transactions from '../../path/transactions.json';
import { GlobalStyle } from 'components/App/GlobalStyle';
import { Layout } from 'components/App/Layout';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
