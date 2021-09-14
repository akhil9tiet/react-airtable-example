import React from "react";
import Deletebtn from "./Deletebtn";

export default function ShowAll({ data }) {
	// console.log(data[0].fields);
	return (
		<div className='container'>
			{(data || []).map((card) => (
				<Card
					key={card.id}
					id={card.id}
					profession={card.fields.Profession}
					phone={card.fields.Contact}
					name={card.fields.Name}
					age={card.fields.Age}
					status={card.fields.Status}
					imgurl={card.fields.Pic[0].url}
					startDate={card.fields.StartDate}
				/>
			))}
		</div>
	);
}

const Card = ({ id, profession, phone, name, age, status, imgurl, startDate }) => {
	return (
		<div className='card-continer'>
			<div className='card-header'>
				<img src={imgurl} alt={`${name}-${profession}`} height={"50%"} width={"50%"} />
			</div>
			<div className='card-body'>
				<p>{name}</p>
				<p>{phone}</p>
				<p>{profession}</p>
				<p>{age}</p>
				<p>{status}</p>
				<p>{startDate}</p>
			</div>
			<Deletebtn id={id} />
		</div>
	);
};

// const Card = ({id, profession, phone, name, age, status, imgurl, startDate })=>{
//   return (
//     <DocumentCard
//     // aria-label="Default Document Card with large file name. Created by Annie Lindqvist a fVipinmcg9!ew minutes ago."
//     onClickHref="http://bing.com"
//   >
//     {/* <DocumentCardPreview {...previewProps} /> */}
//     <DocumentCardTitle
//       title={
//         'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_' +
//         'it_needs_truncating.pptx'
//       }
//       shouldTruncate
//     />
//     <DocumentCardActivity activity="Created a few minutes ago" people={DocumentCardActivityPeople} />
//   </DocumentCard>
//   )
// }
