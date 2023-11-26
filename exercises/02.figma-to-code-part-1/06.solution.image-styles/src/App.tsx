import image from './assets/sunset-skateboard.jpg'

const user = {
	name: 'Max Stylus',
	registeredIn: 'September 2022',
	profileImage: image,
	notesCount: 5,
}

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center bg-cyan-400 p-6">
			<div className="w-full max-w-sm rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
				<div className="flex flex-col items-center">
					<img
						className="-mt-24 h-72 w-56 rounded-xl object-cover shadow-2xl ring-1 ring-black/5"
						src={user.profileImage}
					/>
					<div>
						<h2>{user.name}</h2>
						<p>Joined in {user.registeredIn}</p>
						<a href="#">View all {user.notesCount} notes</a>
					</div>
				</div>
			</div>
		</div>
	)
}
