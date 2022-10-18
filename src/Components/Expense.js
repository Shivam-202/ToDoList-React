
import './Expense.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expense = (props) => {

    let afterRemDataFromExpItm = (itm) => {
        props.getRemDataFromExp(itm)
    }

    return (
        <>
            <Card className="expenseItm">

                {
                    // Condition =>> ()?true:false;
                    (props.expense.length)?

                    props.expense.map(
                        (expElem) => (
                            <ExpenseItem
                                key={expElem.id}
                                date={expElem.date}
                                title={expElem.title}
                                amount={expElem.amount}
                                id={expElem.id}

                                getRemData = {afterRemDataFromExpItm}
                            />
                        )
                    )

                        : <h1>Your List is Empty...</h1>

                }

            </Card>
        </>
    );
}

export default Expense;