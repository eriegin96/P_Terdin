import React from 'react';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatRelative } from 'date-fns';

export default function NewConv({ partner, room }) {
	return (
		<div className="py-2.5 px-5 flex-grow-2 overflow-scroll">
			<div className="w-full flex justify-center items-center">
				<div className="text-center">
					<h3 className="max-w-340 mb-1 text-17">
						You Matched with <strong>{partner?.displayName}</strong>
					</h3>
					<div className="text-15">
						{formatRelative(new Date(room?.createdAt?.seconds * 1000 || 0), new Date())}
					</div>
					<Avatar size={210} src={partner?.photos[0]} className="my-8" />
					<h4 className="text-15">
						Know when <strong>{partner?.displayName}</strong> has read your message.
					</h4>
					<button className="py-1 px-4 mt-1 mx-auto text-white bg-blue-50 rounded-xl shadow-1 flex items-center justify-center">
						<FontAwesomeIcon icon="fa-solid fa-check-double" className="w-3 h-3" />
						<span className="ml-1 text-10">Get Read Receipts</span>
					</button>
				</div>
			</div>
		</div>
	);
}
