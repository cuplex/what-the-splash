import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import  { loadImages } from '../../actions'

const ImageGrid = ({ images, loadImages, isLoading }) => {
     
    useEffect(() => {
        loadImages()
    }, [])
    
    return (
        <div className="content">
            <section className="grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width,
                        )}`}
                    >
                        <img
                            src={image.urls.small}
                            alt={image.user.username}
                        />
                    </div>
                ))}
            </section>
            <button 
                onClick={loadImages}
                disabled={isLoading}
            >
                {isLoading 
                    ? 'Loading...' 
                    : 'Load more images'
                }
            </button>
        </div>
    );
}
const mapStateToProps = ({ isLoading, images, error }) => ({
    isLoading,
    images,
    error,
})

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
