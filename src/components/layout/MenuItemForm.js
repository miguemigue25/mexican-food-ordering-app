import MenuItemPriceProps from "@/components/layout/MenuItemPriceProps";
import EditableImage from "@/components/layout/EditableImage";
import { useEffect, useState } from "react";


export default function MenuItemForm({ onSubmit, menuItem }) {

    const [image, setImage] = useState(menuItem?.image || '');
    const [name, setName] = useState(menuItem?.name || '');
    const [description, setDescription] = useState(menuItem?.description || '');
    const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
    const [sizes, setSizes] = useState(menuItem?.sizes || []);
    const [category, setCategory] = useState(menuItem?.category || '')
    const [categories, setCategories] = useState([]);
    const [extraIngredientPrices, setExtraIngredientPrices] = useState(menuItem?.extraIngredientPrices || []);

    useEffect(() => {
        fetch('/api/categories').then(res => {
            res.json().then(categories => {
                setCategories(categories);
            });
        });
    }, []);

    return (
        <form
            onSubmit={e => onSubmit(e, {
                image, name, description, basePrice, sizes, extraIngredientPrices, category
            })}
            className="mt-8 max-w-2xl mx-auto">
            <div className="md:grid items-start gap-4" style={{ gridTemplateColumns: '.3fr .7fr' }}>
                <div>
                    <EditableImage link={image} setLink={setImage} />
                </div>
                <div className="grow">
                    <label>Item name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <label>Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)}>
                        {categories?.length > 0 && categories.map(c => (
                            <option key={c._id} value={c._id}>{c.name}</option>
                        ))}
                    </select>
                    <label>Base Price</label>
                    <input
                        type="text"
                        value={basePrice}
                        onChange={e => setBasePrice(e.target.value)}
                    />
                    <MenuItemPriceProps
                        name={'Sizes'}
                        addLabel={'Add item size'}
                        props={sizes}
                        setProps={setSizes} />
                    <MenuItemPriceProps name={'Extra ingredients'}
                        addLabel={'Add ingredient prices'}
                        props={extraIngredientPrices}
                        setProps={setExtraIngredientPrices} />
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    );
}