import Container from "../Share/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {
                    categories.map(item => <CategoryBox
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                    ></CategoryBox> )
                }
            </div>
        </Container>
    );
};

export default Categories;