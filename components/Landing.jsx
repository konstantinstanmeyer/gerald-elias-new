export default function Landing({ name, imageUrl }){
    return (
        <div className="general-landing">
            <img src={imageUrl} />
            <h3>{name}</h3>
        </div>
    )
}