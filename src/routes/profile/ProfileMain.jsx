import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { VerifyingSvg } from 'utils/Svg';
import ProfileCarousel from './ProfileCarousel';
import Edit from './edit';
import { AuthContext } from 'context/AuthProvider';

function Main() {
	const { user } = useContext(AuthContext);

	return (
		<>
			<div className="h-full bg-white overflow-scroll rounded-lg">
				<ProfileCarousel />
				<div className="pb-13 text-base text-text-secondary">
					<div className="w-full py-2.5 px-4">
						<div className="min-h-40 flex items-center text-text-primary">
							<div className="pr-2 text-3xl font-semibold">{user.displayName.split(' ')[0]}</div>
							<div className="text-2xl">{user.age}</div>
							<VerifyingSvg className="ml-1 mb-0.5" />
						</div>
						{user.displayInfo.school && (
							<div className="flex">
								<div>
									<FontAwesomeIcon icon="fa-solid fa-graduation-cap" className="w-3.5 h-3.5 mr-1" />
								</div>
								<div className="my-0.5">{user.displayInfo.school}</div>
							</div>
						)}
						{user.displayInfo.location && (
							<div className="flex">
								<div>
									<FontAwesomeIcon icon="fa-solid fa-house" className="w-3.5 h-3.5 mr-1" />
								</div>
								<div className="my-0.5">{user.displayInfo.location}</div>
							</div>
						)}
						<div className="flex">
							<div>
								<FontAwesomeIcon icon="fa-solid fa-user" className="w-3.5 h-3.5 mr-1" />
							</div>
							<div className="my-0.5">Straight</div>
						</div>
					</div>
					<div className="p-4 border-t border-b border-divider-primary">{user.status}</div>
					<div className="p-4">
						<h3 className="text-text-primary font-medium">Passions</h3>
						<div className="mt-4">
							{user.passions.map((item, i) => (
								<div
									key={i}
									className="inline-block mr-2 mb-2 px-2 py-1 border border-text-secondary rounded-25 text-13"
								>
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 pb-4 w-full flex bg-bottom-blur rounded-b-lg">
				<Link
					to="edit"
					className="min-h-40 mx-auto px-6 bg-gradient-to-l from-coral to-hot-pink text-white rounded-25 font-medium inline-flex items-center hover:text-white hover:bg-pink hover:bg-none"
				>
					<span>
						Edit Info
						<span className="ml-2 text-11">(53% Complete)</span>
					</span>
				</Link>
			</div>
		</>
	);
}

export default function ProfileMain() {
	return (
		<div className="profile-main h-full flex justify-center items-center rounded-lg">
			<div className="relative h-167 w-93.75 max-h-y-12 rounded-lg shadow-profile">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="edit" element={<Edit />} />
				</Routes>
			</div>
		</div>
	);
}
