import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
};

export function ShampooFields({ values, onChange }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Name + Price */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">
            <span className="text-destructive">*</span> Name
          </Label>
          <Input
            id="name"
            value={values.name ?? ""}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="Product name"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="price">
            <span className="text-destructive">*</span> Price
          </Label>
          <Input
            id="price"
            type="number"
            value={values.price ?? ""}
            onChange={(e) => onChange("price", e.target.value)}
            placeholder="Price"
          />
        </div>
      </div>

      {/* Brand + Scent */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="brand">Brand</Label>
          <Input
            id="brand"
            value={values.brand ?? ""}
            onChange={(e) => onChange("brand", e.target.value)}
            placeholder="Brand"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="scent">Scent</Label>
          <Input
            id="scent"
            value={values.scent ?? ""}
            onChange={(e) => onChange("scent", e.target.value)}
            placeholder="Scent"
          />
        </div>
      </div>

      {/* Bottle size */}
      <div className="flex flex-col gap-1.5 max-w-xs">
        <Label htmlFor="bottleSize">
          <span className="text-destructive">*</span> Bottle Size
        </Label>
        <Input
          id="bottleSize"
          value={values.bottleSize ?? ""}
          onChange={(e) => onChange("bottleSize", e.target.value)}
          placeholder="e.g. 500ml"
        />
      </div>
    </div>
  );
}
