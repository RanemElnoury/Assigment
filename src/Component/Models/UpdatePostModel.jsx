import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faClose} from '@fortawesome/free-solid-svg-icons';
import './style.css'
function UpdatePostModel({ showModel, handleCloseModel,currentPost,handleChangeData,handleUpdatePost }) {  
    return (
      <Modal show={showModel} onHide={handleCloseModel}>
        <Modal.Header closeButton>
          <Modal.Title>{currentPost.id}-{currentPost.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Modal.Body>
          <div className="edit-post-form">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Title"
              value={currentPost.title}
              onChange={(e) => {
                handleChangeData({ ...currentPost, title: e.target.value });
              }}
            />
            <textarea
              className="form-control mb-2"
              placeholder="Body"
              rows="4"
              value={currentPost.body}
              onChange={(e) => {
                handleChangeData({ ...currentPost, body: e.target.value });
              }}
            />
          </div>
        </Modal.Body>
    

        </Modal.Body>
        <Modal.Footer className='modalFooter'>
          <Button className="btn btn-secondary"  onClick={handleCloseModel}><FontAwesomeIcon icon={faClose} /> Close
          </Button>
          <button className="btn btn-primary" onClick={handleUpdatePost}><FontAwesomeIcon icon={faEdit} /> Update
                                </button>
        </Modal.Footer>
      </Modal>
    );
  
}

export default UpdatePostModel