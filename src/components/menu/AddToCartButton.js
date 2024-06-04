export default function AddToCartButton({ hasSizesOrExtras, onClick, basePrice, image }) {

    if (!hasSizesOrExtras) {
        return (
            <div>
                <button type="button" className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                    <div onClick={onClick}>
                        Add to cart ${basePrice}
                    </div>
                </button>
            </div>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className="mt-4 bg-primary text-white rounded-full px-8 py-2">
            <span>Add to cart (from ${basePrice})</span>
        </button>
    );
}