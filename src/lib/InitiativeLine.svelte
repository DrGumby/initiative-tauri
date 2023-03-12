<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { InitiativeLineModel } from "./models";
    export let data: InitiativeLineModel = {
        char_name: "Placeholder",
        initiative: 0,
        current_hp: 0,
        max_hp: 0,
    };

    const dispatch = createEventDispatcher<{
        delete_request: InitiativeLineModel;
    }>();

    function request_delete() {
        dispatch("delete_request", data);
    }
</script>

<div>
    <div class="row">
        <div class="col">{data.char_name}</div>
        <div class="col">{data.initiative}</div>
        <div class="col">
            <input
                bind:value={data.current_hp}
                type="number"
                class="form-control"
            />
        </div>
        <div class="col">{data.max_hp}</div>
        <div class="col">
            <button
                on:click={request_delete}
                type="submit"
                class="btn btn-danger"
            >
                Delete
            </button>
        </div>
    </div>
</div>
