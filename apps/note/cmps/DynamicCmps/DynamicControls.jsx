const { Fragment } = React

export function DynamicControls({ note, toggleEditMode, togglePalette, onArchive, onTrash, onPin, onRestore, onDeleteForever, onEmail }) {

    switch (note.state) {

        case 'active':
            return (
                <Fragment>
                    <img
                        key="edit"
                        src="assets/img/note/edit.svg"
                        title="Edit"
                        alt="Edit "
                        onClick={() => toggleEditMode(note.id)}
                    />
                    <img
                        key="palette"
                        src="assets/img/note/palette.svg"
                        title="Palette"
                        alt="Palette "
                        onClick={togglePalette}
                    />
                    <img
                        key="archive"
                        src="assets/img/note/archive.svg"
                        title="Archive"
                        alt="Archive "
                        onClick={onArchive}
                    />
                    <img
                        key="trash"
                        src="assets/img/note/trash.svg"
                        title="Trash"
                        alt="Trash "
                        onClick={onTrash}
                    />
                    <img
                        key="pin"
                        src={`assets/img/note/${note.isPinned ? 'unpin' : 'pin'}.svg`}
                        title={note.isPinned ? 'Unpin' : 'Pin'}
                        alt="Pin "
                        onClick={onPin}
                    />
                    <img
                        key="email"
                        src="assets/img/note/email.svg"
                        title="Email"
                        alt="Email "
                        onClick={onEmail}
                    />
                </Fragment>
            );

        case 'archived':
            return (
                <Fragment>
                    <img
                        key="edit"
                        src="assets/img/note/edit.svg"
                        title="Edit"
                        alt="Edit "
                        onClick={() => toggleEditMode(note.id)}
                    />
                    <img
                        key="palette"
                        src="assets/img/note/palette.svg"
                        title="Palette"
                        alt="Palette "
                        onClick={togglePalette}
                    />
                    <img
                        key="unarchive"
                        src="assets/img/note/unarchive.svg"
                        title="Unarchive"
                        alt="Unarchive "
                        onClick={onRestore}
                    />
                    <img
                        key="trash"
                        src="assets/img/note/trash.svg"
                        title="Trash"
                        alt="Trash "
                        onClick={onTrash}
                    />
                                        <img
                        key="email"
                        src="assets/img/note/email.svg"
                        title="Email"
                        alt="Email "
                        onClick={onEmail}
                    />
                </Fragment>
            );

        case 'deleted':
            return (
                <Fragment>
                    <img
                        key="restore"
                        src="assets/img/note/restore.svg"
                        title="Restore"
                        alt="Restore "
                        onClick={onRestore}
                    />
                    <img
                        key="deleteForever"
                        src="assets/img/note/delete.svg"
                        title="Delete forever"
                        alt="Delete forever "
                        onClick={onDeleteForever}
                    />
                </Fragment>
            );
        default:
            return null;
    }
}
