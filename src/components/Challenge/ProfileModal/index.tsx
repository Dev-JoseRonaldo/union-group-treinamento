import Modal from 'react-modal'

interface ProfileModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ProfileModal({isOpen, onRequestClose} : ProfileModalProps){
  return(
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}   
    //overlayClassName="react-modal-overlay"  
    //className="react-modal-content"
    >
      <div>Modal</div>
    </Modal>
  )
}