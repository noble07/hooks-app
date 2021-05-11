import { logDOM } from '@testing-library/dom';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[1]}
            index={1}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la función handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[1].id);
    });

    test('debe de llamar la función handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalled();
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[1].id);
    });

    test('debe de mostrar el texto correctamente', () => {
        expect(wrapper.find('p').text().trim()).toBe(`2. ${demoTodos[1].desc}`);
    });

    test('debe de tener la clase complete si el TODO.done = true', () => {

        const todo = demoTodos[1];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                index={1}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBeTruthy();

    });
    

});