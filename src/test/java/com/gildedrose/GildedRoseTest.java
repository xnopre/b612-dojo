package com.gildedrose;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class GildedRoseTest {

    @Test
    public void should_work_without_items() {
        Item[] items = new Item[0];
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();
    }

    @Test
    public void should_work_with_aged_brie(){
        Item item1 = new Item("Aged Brie", 10, 5);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(6, item1.quality);
        assertEquals(9, item1.sellIn);
    }

    @Test
    public void should_work_with_backstage(){
        Item item1 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(7, item1.quality);
        assertEquals(9, item1.sellIn);
    }

    @Test
    public void should_work_with_backstage_sellIn_inf_6(){
        Item item1 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(8, item1.quality);
        assertEquals(4, item1.sellIn);
    }

    @Test
    public void should_work_with_backstage_sellIn_sup_11(){
        Item item1 = new Item("Backstage passes to a TAFKAL80ETC concert", 11, 5);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(6, item1.quality);
        assertEquals(10, item1.sellIn);
    }

    @Test
    public void should_work_with_backstage_quality_sup_50(){
        Item item1 = new Item("Backstage passes to a TAFKAL80ETC concert", 11, 55);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(55, item1.quality);
        assertEquals(10, item1.sellIn);
    }

    @Test
    public void should_work_with_sulfuras(){
        Item item1 = new Item("Sulfuras, Hand of Ragnaros", 5, 5);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(5, item1.quality);
        assertEquals(5, item1.sellIn);
    }

    @Test
    public void should_work_with_banana(){
        Item item1 = new Item("Banana", 5, 5);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(4, item1.quality);
        assertEquals(4, item1.sellIn);
    }

    @Test
    public void should_work_with_banana_quality_neg(){
        Item item1 = new Item("Banana", 5, -1);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(-1, item1.quality);
        assertEquals(4, item1.sellIn);
    }

    @Test
    public void should_work_with_sellIn_neg(){
        Item item1 = new Item("Banana", -1, 5);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(3, item1.quality);
        assertEquals(-2, item1.sellIn);
    }

    @Test
    public void should_work_with_sellIn_neg_Backstage(){
        Item item1 = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 5);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(0, item1.quality);
        assertEquals(-2, item1.sellIn);
    }

    @Test
    public void should_work_with_sellIn_neg_agedBrie(){
        Item item1 = new Item("Aged Brie", -1, 5);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(7, item1.quality);
        assertEquals(-2, item1.sellIn);
    }

    @Test
    public void should_work_with_sellIn_neg_banana(){
        Item item1 = new Item("Banana", -1, 5);
        Item[] items = new Item[]{item1};
        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertEquals(3, item1.quality);
        assertEquals(-2, item1.sellIn);
    }
}
