import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
};

export function ShoesFields({ values, onChange }: Props) {
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

      {/* Brand + Shoe Size */}
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
          <Label htmlFor="shoeSize">Shoe Size</Label>
          <Input
            id="shoeSize"
            value={values.shoeSize ?? ""}
            onChange={(e) => onChange("shoeSize", e.target.value)}
            placeholder="Shoe size"
          />
        </div>
      </div>

      {/* Shoe Color + Gender */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="shoeColor">Shoe Color</Label>
          <Input
            id="shoeColor"
            value={values.shoeColor ?? ""}
            onChange={(e) => onChange("shoeColor", e.target.value)}
            placeholder="Color"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="gender">Gender</Label>
          <Select
            value={values.gender ?? ""}
            onValueChange={(v) => onChange("gender", v)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Unisex">Unisex</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
