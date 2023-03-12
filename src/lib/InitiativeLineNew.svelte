<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { InitiativeLineModel } from "./models";

    const dispatch = createEventDispatcher<{
        create_request: InitiativeLineModel;
    }>();

    const DEFAULT_DATA: InitiativeLineModel = {
        char_name: "",
        initiative: 10,
        current_hp: 10,
        max_hp: 10,
    };

    let data: InitiativeLineModel = DEFAULT_DATA;

    function request_create() {
        dispatch("create_request", { ...data, current_hp: data.max_hp });
        data = DEFAULT_DATA;
    }
</script>

<div>
    <div class="row">
        <div class="col">
            <input
                bind:value={data.char_name}
                type="text"
                class="form-control"
            />
        </div>
        <div class="col">
            <input
                bind:value={data.initiative}
                type="number"
                class="form-control"
            />
        </div>
        <div class="col">
            <input
                bind:value={data.max_hp}
                type="number"
                class="form-control"
            />
        </div>
        <div class="col">
            <input
                bind:value={data.max_hp}
                type="number"
                class="form-control"
                disabled
            />
        </div>
        <div class="col">
            <button
                on:click={request_create}
                type="submit"
                class="btn btn-primary"
            >
                Add
            </button>
        </div>
    </div>
</div>
