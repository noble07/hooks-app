import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(
            <TodoAdd
                handleAddTodo={handleAddTodo}
            />
        );
    });

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
   
    test('NO debe de llamar handleAddTodo', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}});

        expect(handleAddTodo).not.toHaveBeenCalled();

    });

    test('debe de llamar la función handleAddTodo', () => {
        // con un argumento // called

        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(handleAddTodo).toHaveBeenCalled();
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
});
