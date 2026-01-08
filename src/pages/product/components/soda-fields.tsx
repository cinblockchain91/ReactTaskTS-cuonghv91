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

export function SodaFields({ values, onChange }: Props) {
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

      {/* Brand + Flavor */}
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
          <Label htmlFor="flavor">Flavor</Label>
          <Input
            id="flavor"
            value={values.flavor ?? ""}
            onChange={(e) => onChange("flavor", e.target.value)}
            placeholder="Flavor"
          />
        </div>
      </div>

      {/* Package Type + Serving Size */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="packageType">
            <span className="text-destructive">*</span> Package Type
          </Label>
          <Select
            value={values.packageType ?? ""}
            onValueChange={(v) => onChange("packageType", v)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select package type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Can">Can</SelectItem>
              <SelectItem value="Plastic Bottle">Plastic Bottle</SelectItem>
              <SelectItem value="Glass Bottle">Glass Bottle</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="servingSize">Serving Size</Label>
          <Input
            id="servingSize"
            value={values.servingSize ?? ""}
            onChange={(e) => onChange("servingSize", e.target.value)}
            placeholder="Serving size"
          />
        </div>
      </div>
    </div>
  );
}
