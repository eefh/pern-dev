import React from 'react';

const EditTodo = () => {
    return (
        <>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
            Edit
            </button>

            <div className="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                
                    <div class="modal-header">
                        <h4 class="modal-title">Modal Heading</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>


                    <div class="modal-body">
                        Modal body..
                    </div>


                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EditTodo;