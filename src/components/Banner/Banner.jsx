function Banner ({title, src, alt,}){

    return (
        <div className="banner">
            <h2>{title}</h2>
            <img src={src} alt={alt} />
        </div>
    )
}

export default Banner;