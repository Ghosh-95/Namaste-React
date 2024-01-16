import React from "react";
/* export default function Profile() {
    return (
        <Avatar person={{ name: "Sushovan", id: "sush125" }} height={undefined} />
    );
};

function Avatar({ person, height = 167 }) {
    return (
        <div style={{ color: 'limegreen' }}>
            <p>Person: {person.name}, ID: {person.id}</p>
            <p>Height: {height}cm</p>
        </div>
    );
};
*/

function Card(props) {
    // console.log(props);
    const { children } = props;
    console.log(children);

    return (
        <>
            <div className="card">
                <div className="card-content">
                    {children}
                </div>
            </div>
        </>
    )
}

export default function Profile() {
    return (
        <div>
            <Card>
                <h1>Photo</h1>
                <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                />
            </Card>
            <Card>
                <h1>About</h1>
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </Card>
        </div>
    );
};
