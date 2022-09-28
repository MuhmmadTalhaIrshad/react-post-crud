import { Redirect, Route, Switch } from 'react-router-dom';
import AllPosts from './pages/Allposts';
import PostDetail from './pages/PostDetails';
import CreatePost from './pages/CreatePosts';

import Layout from './components/layouts/Layout';
import NotFound from './pages/NotFound';

const App: React.FC = () => (
	<Layout>
		<Switch>
			<Route exact path='/'>
				<Redirect to='/posts' />
			</Route>
			{/* All Posts Route */}
			<Route exact path='/posts'>
				<AllPosts />
			</Route>
			{/* Sinle Post */}
			<Route path='/posts/:postId'>
				<PostDetail />
			</Route>
			{/* Create a new Post */}
			<Route path='/new-post'>
				<CreatePost />
			</Route>
			<Route path='*'>
				<NotFound />
			</Route>
		</Switch>
	</Layout>
);

export default App;
