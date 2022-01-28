import React from 'react';

export default function Noteitem(props) {
    let { notes } = props
    return <>
        <div className="col-md-3">
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{notes.title}</h5>
                    <p class="card-text">{notes.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, culpa explicabo repellendus hic impedit ex porro incidunt eveniet unde ipsum recusandae saepe cupiditate minus error adipisci necessitatibus temporibus alias deserunt suscipit sapiente. Atque, dignissimos!</p>
                </div>
            </div>
        </div>
    </>
}
