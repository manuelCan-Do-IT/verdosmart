import { ProductData } from "../components/productsData";
import { supabase } from "../lib/supabaseClient";

// Interface pour les opérations CRUD sur les produits
export interface ProductService {
  getProducts(): Promise<ProductData[]>;
  getProductById(id: number): Promise<ProductData | null>;
  createProduct(product: Omit<ProductData, "id">): Promise<ProductData>;
  updateProduct(id: number, product: Partial<ProductData>): Promise<ProductData | null>;
  deleteProduct(id: number): Promise<boolean>;
}

// Implémentation du service avec Supabase
export class SupabaseProductService implements ProductService {
  private readonly TABLE_NAME = "products";

  async getProducts(): Promise<ProductData[]> {
    try {
      const { data, error } = await supabase
        .from(this.TABLE_NAME)
        .select("*");

      if (error) throw error;
      return data as ProductData[] || [];
    } catch (error) {
      console.error("Erreur lors de la récupération des produits:", error);
      return [];
    }
  }

  async getProductById(id: number): Promise<ProductData | null> {
    try {
      const { data, error } = await supabase
        .from(this.TABLE_NAME)
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data as ProductData;
    } catch (error) {
      console.error(`Erreur lors de la récupération du produit ${id}:`, error);
      return null;
    }
  }

  async createProduct(product: Omit<ProductData, "id">): Promise<ProductData> {
    try {
      const { data, error } = await supabase
        .from(this.TABLE_NAME)
        .insert(product)
        .select()
        .single();

      if (error) throw error;
      return data as ProductData;
    } catch (error) {
      console.error("Erreur lors de la création du produit:", error);
      throw error;
    }
  }

  async updateProduct(id: number, product: Partial<ProductData>): Promise<ProductData | null> {
    try {
      const { data, error } = await supabase
        .from(this.TABLE_NAME)
        .update(product)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data as ProductData;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du produit ${id}:`, error);
      return null;
    }
  }

  async deleteProduct(id: number): Promise<boolean> {
    try {
      const { error } = await supabase
        .from(this.TABLE_NAME)
        .delete()
        .eq("id", id);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error(`Erreur lors de la suppression du produit ${id}:`, error);
      return false;
    }
  }
}

// Instance par défaut du service
export const productService = new SupabaseProductService();