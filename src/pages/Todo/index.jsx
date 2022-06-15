import cn from 'classnames';
import st from './style.module.scss';
import { useTodo } from './useTodo';
import Loader from '../../components/Loader';
import Checkbox from '../../components/CheckBox';
import Button from '../../components/Button';
import { useModal } from '../../contexts/modals';
import { CONFIRM_DELETE_MODAL, CRAETE_TODO_MODAL } from '../../constants/modals';
import { CraeteTodoModal } from '../../modals/CraeteTodoModal';
import { ArrowDownIcon, DeleteIcon } from '../../assets/icons';
import { ConfirmDeleteModal } from '../../modals/ConfirmDeleteModal';

function Todo() {
  const {
    onOpen, open, onClose, data,
  } = useModal();
  const {
    list,
    isLoading,
    open: openTodo,
    handleEdit,
    handleCreate,
    handleDelete,
    handleEditSubTodo,
    toggleOpen,
  } = useTodo(onClose);

  return (
    <div className={st.wrapper}>
      <Loader isLoading={isLoading} />
      <div className={st.createContainer}>
        <Button onClick={() => onOpen(CRAETE_TODO_MODAL)}>
          Craete
        </Button>
      </div>
      <div className={st.container}>
        {list.map(({
          completed, title, todos, _id,
        }, i) => (
          <div className={st.todoContainer} key={_id}>
            <div className={st.todo}>
              {!!todos.length && (
                <ArrowDownIcon
                  className={cn(st.arrow, { [st.open]: openTodo === _id })}
                  onClick={() => toggleOpen(_id)}
                />
              )}
              <Checkbox
                checked={completed}
                title={title}
                onChange={(completed) => handleEdit({ _id, completed })}
              />
              <DeleteIcon className={st.icon} onClick={() => onOpen(CONFIRM_DELETE_MODAL, _id)} />
            </div>
            <div className={cn(st.subTodo, { [st.open]: openTodo === _id })}>
              {todos.map((item, i) => (
                <Checkbox
                  key={i}
                  checked={item.completed}
                  title={item.title}
                  onChange={(completed) => handleEditSubTodo({ i, completed, _id })}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {open === CRAETE_TODO_MODAL && (
        <CraeteTodoModal open={open} onClose={onClose} handleCreate={handleCreate} />
      )}
      {open === CONFIRM_DELETE_MODAL && (
        <ConfirmDeleteModal open={open} onClose={handleDelete} id={data} />
      )}
    </div>
  );
}

export default Todo;
