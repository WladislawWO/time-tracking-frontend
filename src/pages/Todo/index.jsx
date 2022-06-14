import st from './style.module.scss';
import { useTodo } from './useTodo';
import Loader from '../../components/Loader';
import Checkbox from '../../components/CheckBox';
import Button from '../../components/Button';
import { useModal } from '../../contexts/modals';
import { CRAETE_TODO_MODAL } from '../../constants/modals';
import { CraeteTodoModal } from '../../modals/CraeteTodoModal';
import { DeleteIcon } from '../../assets/icons';

function Todo() {
  const {
    list, isLoading, handleEdit, handleCreate, handleDelete,
  } = useTodo();
  const { onOpen, open, onClose } = useModal();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={st.wrapper}>
      <div className={st.createContainer}>
        <Button onClick={() => onOpen(CRAETE_TODO_MODAL)}>
          Craete
        </Button>
      </div>
      <div className={st.container}>
        {list.map(({ completed, title, _id }, i) => (
          <div className={st.todoContainer}>
            <div className={st.todo}>
              <Checkbox
                key={i}
                checked={completed}
                title={title}
                onChange={(completed) => handleEdit({ _id, completed })}
              />
              <DeleteIcon className={st.icon} onClick={() => handleDelete(_id)} />
            </div>
            <div className={st.subTodo} />
          </div>
        ))}
      </div>
      <CraeteTodoModal open={open} onClose={onClose} handleCreate={handleCreate} />
    </div>
  );
}

export default Todo;
