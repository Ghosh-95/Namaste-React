const userData = [
    {
        id: "SG001",
        userName: "Sushovan Ghosh",
        job: "Frontend Developer",
        address: "Burdwan, West Bengal",
        email: "sushovanghosh960@gmail.com",
        skills: ['HTML', 'CSS', 'BootStrap', 'Tailwind', 'JavaScript', 'React', 'Git'],
    },
    {
        id: "SJ005",
        userName: "Sujata Ghosh",
        job: "Website Developer",
        address: "Kolkata, West Bengal",
        email: "email@sujata.com",
        skills: ['HTML', 'CSS', 'BootStrap', 'C++', 'JavaScript', 'C#', 'Git', 'Python'],
    }
];

export default function PropsCompenent() {
    return (
        <>
            <div>
                {userData.map(user => (<PersonalInfo key={user.id} data={user} />))}
            </div>
        </>
    )
}



function PersonalInfo({ data }) {
    const { userName, job, address, email, skills } = data;
    return (
        <div className="info-container">
            <h1>Name: {userName}</h1>
            <h2>Job: {job}</h2>
            <p>Address: {address}</p>
            <p>Email: {email}</p>
            <p>Skills: {skills.length > 1 ? `${skills.slice(0, skills.length - 2).join(', ')} and ${skills.slice(skills.length - 1)}` : skills.join('')}</p>
        </div>
    )
}